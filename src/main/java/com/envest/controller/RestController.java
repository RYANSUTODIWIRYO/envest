package com.envest.controller;

import com.envest.service.DatabaseService;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/envest")
@CrossOrigin(origins = "http://localhost:3000") // Untuk Cross-Origin request
public class RestController {

    DatabaseService dbService = new DatabaseService();

    @RequestMapping(value = "/tes", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> tes(){
        System.out.println("Tes Masuk");

        String nama = "{\"message\": \"tes\"}";

        return new ResponseEntity<>(nama, HttpStatus.OK);
    }


    //{
    //    "email": "email@email.com",
    //    "password": "password"
    //}
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody JSONObject joUser){
        System.out.println("envest/login is accessed");
        // String nama = "{\"message\": \"Halo "+ joUser.get("name") +"\"}";

        // Access database and receive the response
        JSONObject res = dbService.login(joUser);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(@RequestBody JSONObject joUser){
        System.out.println("envest/register is accessed");
        // String nama = "{\"message\": \"Halo "+ joUser.get("name") +"\"}";

        // Access database and receive the response
        JSONObject res = dbService.register(joUser);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
