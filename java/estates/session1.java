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
import javax.servlet.http.HttpSession;


public class session1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	dbconfig dbc = new dbconfig();
	PrintWriter pw = null;

    public session1() {
        super();

    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		request.setCharacterEncoding("utf-8");
		
		String lemail = request.getParameter("lemail");
		String lname = request.getParameter("lname");
		
		String sql = null; 
		HttpSession session = request.getSession(); 
		
		try {
		Connection con = this.dbc.info();
		PreparedStatement ps = null;
		sql = "select * from estates where lemail='"+lemail+"'";
		ps = con.prepareStatement(sql);


		ResultSet success = ps.executeQuery();
		String sql_email = "";
		String sql_lname = "";
		
		while(success.next()) {
			sql_email = success.getString("lemail"); 
			sql_lname = success.getString("lname");
		}
		
	
		//세션 가상 변수를 이용하여 생성완료
		session.setAttribute("email", lemail);
		session.setAttribute("name", lname);
		}
		catch (Exception e){
			System.out.println("데이터 베이스 접속 오류!");
		}
	}

}
