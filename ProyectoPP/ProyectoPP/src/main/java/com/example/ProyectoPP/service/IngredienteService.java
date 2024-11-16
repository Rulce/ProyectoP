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

import com.example.ProyectoPP.entity.Ingrediente;
import com.example.ProyectoPP.repository.IngredienteRepository;

@RestController
@RequestMapping("/ingrediente")
@CrossOrigin

public class IngredienteService {

	@Autowired
	IngredienteRepository ur;
	
	@GetMapping(path = "/buscar")
	public List<Ingrediente> buscarIngrediente(){
		return ur.findAll();
	}
	
	@PostMapping(path="/guardar")
	public Ingrediente guardarIngrediente(@RequestBody Ingrediente ingrediente) {
		return ur.save(ingrediente);
	}
	
	@PostMapping(path="/like")
	public List <Ingrediente> list(@RequestBody Ingrediente ingrediente) {
		
		List<Ingrediente> ingredientes = new ArrayList<>();
		
		if(ingrediente.getNombre() != null) {
			ingredientes = ur.findByNombreLike("%"+ingrediente.getNombre()+"%");
		}
		
		return ingredientes;
	}
	
	@GetMapping(path="/Descendente")
    public List<Ingrediente> CantidadStock() {
        return ur.findAllByOrderByCantidadStockDesc();
    }
	
	@DeleteMapping(path="/borrar/{idingrediente}")
	public void borrarIngrediente(@PathVariable int idingrediente) {
		ur.deleteById(idingrediente);
		
	}
	
}
