package com.example.ProyectoPP.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoPP.entity.Noticia;
import com.example.ProyectoPP.repository.NoticiaRepository;


@RestController
@RequestMapping("/noticia")
@CrossOrigin
public class NoticiaService {

	@Autowired
	NoticiaRepository ur;
	
	@GetMapping(path = "/buscar")
	public List<Noticia> buscarNoticia(){
		return ur.findAll();
	}
	
	@PostMapping(path="/guardar")
	public Noticia guardarNoticia(@RequestBody Noticia noticia) {
		return ur.save(noticia);
	}
	
	@PostMapping(path="/fechaAntes")
    public List<Noticia> buscarPorFechaAntes(@RequestBody Noticia noticia) {
        List<Noticia> resultados = new ArrayList<>();

        if (noticia.getFechaPublicacion() != null) {
            resultados = ur.findByFechaPublicacionBefore(noticia.getFechaPublicacion());
        }

        return resultados;
    }
	
	@PutMapping(path="/actualizar/{idnoticia}")
	public Noticia actualizarNoticia(@PathVariable int idnoticia, @RequestBody Noticia noticia) {
	    noticia.setIdnoticia(idnoticia);
	    return ur.save(noticia); // Save también actualiza si el ID existe
	}

	
	@DeleteMapping(path="/borrar/{idnoticia}")
	public void borrarNoticia(@PathVariable int idnoticia) {
		ur.deleteById(idnoticia);
		
	}
	
}
