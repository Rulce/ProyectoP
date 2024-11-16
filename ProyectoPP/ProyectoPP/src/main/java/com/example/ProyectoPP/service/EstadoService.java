package com.example.ProyectoPP.service;

import java.util.ArrayList;
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

import com.example.ProyectoPP.entity.Estado;
import com.example.ProyectoPP.repository.EstadoRepository;


@RestController
@RequestMapping("/estado")
@CrossOrigin

public class EstadoService {

	@Autowired
	EstadoRepository ur;
	
	@GetMapping(path = "/buscar")
	public List<Estado> buscarEstado(){
		return ur.findAll();
	}
	
	@PostMapping(path="/guardar")
	public Estado guardarEstado(@RequestBody Estado estado) {
		return ur.save(estado);
	}
	
	@PostMapping(path="/like")
	public List <Estado> list(@RequestBody Estado estado) {
		
		List<Estado> estados = new ArrayList<>();
		
		if(estado.getEstado() != null) {
			estados = ur.findByEstadoLike("%"+estado.getEstado()+"%");
		}
		
		return estados;
	}
	
	@DeleteMapping(path="/borrar/{idestadoPedido}")
	public void borrarEstado(@PathVariable int idestadoPedido) {
		ur.deleteById(idestadoPedido);
		
	}
}
