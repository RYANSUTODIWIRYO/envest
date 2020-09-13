package com.envest.service;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.Reader;
import java.util.HashMap;

import com.envest.model.User;

@Service
public class DatabaseService {

    private SqlSession session;

    public void connectMyBatis() throws IOException {
        Reader reader = Resources.getResourceAsReader("SqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        session = sqlSessionFactory.openSession();
    }

    // Function for login
    public JSONObject login(JSONObject joUser) {
        try {
            // Connect to database
            connectMyBatis();

            // find User by email
            HashMap<String, String> user = session.selectOne("envest.findByEmail", joUser.get("email"));

            // Close connection
            session.close();

            // If User is not found / invalid
            if (user == null) {
                HashMap<String, String> err = new HashMap<>();
                err.put("error", "invalid email");
                return new JSONObject(err);
            } // If the password is wrong / invalid
            else if (!user.get("password").equals(joUser.get("password"))) { //
                HashMap<String, String> err = new HashMap<>();
                err.put("error", "invalid password");
                return new JSONObject(err);
            }
            else {
                user.remove("password"); // Remove password field
                return new JSONObject(user);
            }
        } catch (Exception e) {
            HashMap<String, String> err = new HashMap<>();
            err.put("error", e.toString());
            return new JSONObject(err);
        }
    }

    // Function for register
    public JSONObject register(JSONObject joUser) {
        try {
            // Connect to database
            connectMyBatis();

            // find User by email
            HashMap<String, String> res = session.selectOne("envest.findByEmail", joUser.get("email"));

            //  If the email is exist
            if (res != null) {
                HashMap<String, String> err = new HashMap<>();
                err.put("error", "email is already exist!");
                return new JSONObject(err);
            }

            // Create model User form jsonObject
            User objUser = new User(
                    (String) joUser.get("email"),
                    (String) joUser.get("name"),
                    (String) joUser.get("role"),
                    (String) joUser.get("password")
            );

            // Insert new user
            int res2 = session.insert("envest.addUser", objUser);

            // If success
            if (res2 != 0) {
                session.commit();
                session.close();
                return joUser;
            } // If error
            else {
                session.close();
                HashMap<String, String> err = new HashMap<>();
                err.put("error", "failed to add user");
                return new JSONObject(err);
            }
        } catch (Exception e) {
            HashMap<String, String> err = new HashMap<>();
            err.put("error", e.toString());
            return new JSONObject(err);
        }
    }
}
