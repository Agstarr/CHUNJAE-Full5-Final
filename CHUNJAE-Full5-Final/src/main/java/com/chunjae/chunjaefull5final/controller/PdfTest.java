package com.chunjae.chunjaefull5final.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PdfTest {

    @GetMapping("/pdf")
    public String pdf(){
        return "pdftest";
    }
}
