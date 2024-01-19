package estates;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;
import java.util.Base64.Encoder;


import javax.servlet.ServletException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;
	dbconfig dbc = new dbconfig();	
	PreparedStatement ps = null;
	Connection con = null;

    public login() {
        super();

    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		request.setCharacterEncoding("utf-8");
		
		String lemail = request.getParameter("lemail");
		String lpass = request.getParameter("lpass");
		
		String sql = null;
		HttpSession session = request.getSession();
		pw = response.getWriter();
		
		try {
			 con = this.dbc.info();
			
			
			if(lemail.equals("") || lpass.equals("")) {
				pw.write("<script>"
						+ "alert('올바른 접근이 아닙니다.');"
						+ "history.go(-1);"
						+ "</script");
			}
			else {
				sql = "select * from estates where lemail='"+lemail+"'";
				ps = con.prepareStatement(sql);
				
				ResultSet success = ps.executeQuery();
				String sql_email = "";
				String sql_lpass = "";
				String sql_lname = "";
				
				while(success.next()) {
					sql_email = success.getString("lemail");
					sql_lpass = success.getString("lpass");
					sql_lname = success.getString("lname");
					
				}
				
				if(sql_email == "") {
					pw.write("<script>"
							+ "alert('가입된 사용자가 아닙니다.');"
							+ "history.go(-1);"
							+ "</script>");
				}
				else {
					Encoder ec = Base64.getEncoder();
					String security = ec.encodeToString(lpass.getBytes());
					
					if(security.equals(sql_lpass)){
						session.setAttribute("email", lemail);
						session.setAttribute("name", sql_lname);
						
						//RequestDispatcher rd = request.getRequestDispatcher("./top.jsp");
						//rd.forward(request, response);
						
						pw.write("<script>"
								+ "alert('환영합니다. 로그인 되셨습니다.');"
								+ "location.href='./index.do';"
								+ "</script>");
						
						ps.close();
						con.close();
						this.pw.close();
					}
					else {
						pw.write("<script>"
								+ "alert('패스워드를 확인하시길 바랍니다.');"
								+ "history.go(-1);"
								+ "</script>");
						
					}
				}
				
			}
		}
		catch(Exception e){
			System.out.println("데이터 베이스 접속 오류!");
		}
		
	}

}
