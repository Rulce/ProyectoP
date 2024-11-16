package com.example.ProyectoPP.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoPP.entity.Calificacion;
import com.example.ProyectoPP.repository.CalificacionRepository;

@RestController
@RequestMapping("/calificacion")
@CrossOrigin

public class CalificacionService {

	@Autowired
	CalificacionRepository ur;
	
	@GetMapping(path = "/buscar")
	public List<Calificacion> buscarCalificacion(){
		return ur.findAll();
	}
	
	@PostMapping(path="/guardar")
	public Calificacion guardarCalificacion(@RequestBody Calificacion calificacion) {
		return ur.save(calificacion);
	}
	
	@PostMapping(path="/consulta")
	public Calificacion login(@RequestBody Calificacion calificacion) {
		
		Calificacion consulta = null;
		List<Calificacion> calis = ur.findByNotaAndNoExamen(calificacion.getNota(), calificacion.getNoExamen());
		
		if(calis.size()>0) {
			consulta = calis.get(0);
		}
		
		return consulta;
	}
	
	@DeleteMapping(path="/borrar/{idcalificacion}")
	public void borrarCalificacion(@PathVariable int idcalificacion) {
		ur.deleteById(idcalificacion);
		
	}
}
