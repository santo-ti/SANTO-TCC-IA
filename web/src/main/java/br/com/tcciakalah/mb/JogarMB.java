package br.com.tcciakalah.mb;

import java.io.Serializable;

import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;

import org.springframework.stereotype.Component;

@Component
@ViewScoped
public class JogarMB implements Serializable {

    private static final long serialVersionUID = 1L;

    @PostConstruct
    public void init() {}

}
