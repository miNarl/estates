package estates;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;
import java.util.Base64.Encoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class join extends HttpServlet {
	private static final long serialVersionUID = 1L;
    dbconfig dbc = new dbconfig();
    PrintWriter pw = null;
    PreparedStatement ps = null;
    Connection con = null;
    ResultSet rs = null; 
	
    public join() {
        super();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        response.setCharacterEncoding("utf-8");
        request.setCharacterEncoding("utf-8");

        String lemail = request.getParameter("lemail");
        String lpass = request.getParameter("lpass");
        String lname = request.getParameter("lname");
        String lhp = request.getParameter("lhp");
        String lpart1 = (String) request.getParameter("lpart1");
        String lpart2 = (String) request.getParameter("lpart2");
        String lpart3 = (String) request.getParameter("lpart3");
        String lpart4 = (String) request.getParameter("lpart4");
        String lpart5 = (String) request.getParameter("lpart5");

        String sqlCheckDuplicate = "SELECT count(*) as cnt FROM estates WHERE lemail = ?";

        if (lpart1 == null || lpart1.equals("null")) {
            lpart1 = "N";
        }
        if (lpart5 == null || lpart5.equals("null")) {
            lpart5 = "N";
        }

        try {
            con = this.dbc.info();
            Encoder ec = Base64.getEncoder();
            String security = ec.encodeToString(lpass.getBytes());
            pw = response.getWriter();

            // 중복 이메일 체크
            ps = con.prepareStatement(sqlCheckDuplicate);
            ps.setString(1, lemail);
            rs = ps.executeQuery();

            if (rs.next()) {
                int cnt = rs.getInt("cnt");
                if (cnt > 0) {
                    pw.write("<script>" + "alert('이메일이 중복되었습니다. 다른 이메일을 입력해 주시길 바랍니다');" + "history.go(-1);"
                            + "</script>");
                    return;
                }
            }

            if (lemail.equals("") || lpass.equals("") || lname.equals("") || lhp.equals("")) {
                pw.write("<script>" + "alert('올바른 값이 전달되지 않았습니다.');" + "history.go(-1);" + "</script>");
            } else {
                String sqlInsert = "INSERT INTO estates (lidx, lemail, lpass, lname, lhp, lpart1, lpart2, lpart3, lpart4, lpart5) "
                        + "VALUES ('0',?,?,?,?,?,?,?,?,?)";

                ps = con.prepareStatement(sqlInsert);
                ps.setString(1, lemail);
                ps.setString(2, security);
                ps.setString(3, lname);
                ps.setString(4, lhp);
                ps.setString(5, lpart1);
                ps.setString(6, lpart2);
                ps.setString(7, lpart3);
                ps.setString(8, lpart4);
                ps.setString(9, lpart5);

                int success = ps.executeUpdate();

                if (success > 0) {
                    pw.write("<script>" + "alert('정상적으로 회원가입이 완료 되었습니다.');" + "location.href='./index.jsp';"
                            + "</script>");
                } else {
                    pw.write("<script>" + "alert('데이터 오류로 인하여 회원가입을 다시 해주셔야 합니다.');" + "location.href='./index.jsp';"
                            + "</script>");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Database 연결오류 발생!" + e);
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
                if (con != null) {
                    con.close();
                }
            } catch (Exception e) {
                System.out.println("종료 오류");
            }
        }
    }
}
