package estates;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class emailsearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;
	dbconfig dbc = new dbconfig();

    public emailsearch() {
        super();

    }


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		request.setCharacterEncoding("utf-8");
		
		String lemail  = request.getParameter("lemail");
		String lname = request.getParameter("lname");
		String lhp  = request.getParameter("lhp");
		String sql = null;  
		

		pw = response.getWriter();
		
		try {
			Connection con = this.dbc.info();
			PreparedStatement ps = null;
			
			
			if(lname.equals("") || lhp.equals("")) {
				pw.write("<script>"
						+ "alert('올바른 접근이 아닙니다.');"
						+ "history.go(-1);"
						+ "</script>");
			}
			else {
				sql = "select * from estates where lname='"+lname+"' and lhp='"+lhp+"'";
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
					pw.write("<script>"
								+ "alert('고객님의 이메일은 "+sql_lemail+" 입니다.');"
								+ "location.href='./login.jsp';"
								+ "</script>");
				}
			}
		}
		catch (Exception e){
			System.out.println("데이터 베이스 접속 오류!");
		}
	}

}
