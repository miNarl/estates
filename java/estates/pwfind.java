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


public class pwfind extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;
	dbconfig dbc = new dbconfig();

    public pwfind() {
        super();
 
    }


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		request.setCharacterEncoding("utf-8");
		
		String lname = request.getParameter("lname");
		String lemail  = request.getParameter("lemail");
		String sql = null; 
		String sql2 = null; 

		pw = response.getWriter();
		
		try {
			Connection con = this.dbc.info();
			PreparedStatement ps = null;
			PreparedStatement ps2 = null;
			
			
			if(lname.equals("") || lemail.equals("")) {
				pw.write("<script>"
						+ "alert('올바른 접근이 아닙니다.');"
						+ "history.go(-1);"
						+ "</script>");
			}
			else {
				sql = "select * from estates where lemail='"+lemail+"' and lname='"+lname+"'";
				ps = con.prepareStatement(sql);
				
				ResultSet success = ps.executeQuery();
				
				String sql_lemail = "";
				
				while(success.next()) {
					sql_lemail = success.getString("lemail");

				}
				
				if(sql_lemail == "") {
					pw.write("<script>"
							+ "alert('가입된 사용자가 아닙니다.');"
							+ "history.go(-1);"
							+ "</script>");
				}
				else{
					Encoder ec = Base64.getEncoder();
					String lpass = "a123456789";
					String security = ec.encodeToString(lpass.getBytes());
					
					sql = "update estates set lpass='"+security+"' where lemail='"+lemail+"'";
					
					ps = con.prepareStatement(sql);
					ps.executeUpdate();
					
					ps.close();
					con.close();
					
					pw.write("<script>"
								+ "alert('임의의 비밀번호는 a123456789! 입니다.');"
								+ "location.href='./login.jsp';"
								+ "</script>");
					
					this.pw.close();
				}
			}
		}
		catch (Exception e){
			System.out.println("데이터 베이스 접속 오류!");
		}
	}

}
