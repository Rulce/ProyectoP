package com.example.ProyectoPP.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoPP.entity.Platillo;
import com.example.ProyectoPP.entity.PlatilloIngrediente;
import com.example.ProyectoPP.repository.PlatilloIngredienteRepository;
import com.example.ProyectoPP.repository.PlatilloRepository;

@RestController
@RequestMapping("/platillo")
@CrossOrigin

public class PlatilloService {

	@Autowired
	PlatilloRepository ur;
	
	@Autowired
	PlatilloIngredienteRepository pr;
	
	@GetMapping(path = "/buscar")
	public List<Platillo> buscarPlatillo(){
		return ur.findAll();
	}
	
	@PostMapping(path="/guardar")
	public ResponseEntity<?> guardarPlatillo(@RequestBody Platillo platillo) {
	    
	        List<PlatilloIngrediente> ingredientes = platillo.getPlain() != null ? platillo.getPlain() : new ArrayList<>();
	        platillo.setPlain(null);
	        
	        platillo = ur.save(platillo);
	        
	        for (PlatilloIngrediente c : ingredientes) {
	            c.setPlatilloIdplatillo(platillo.getIdplatillo());
	            pr.save(c);
	        }
	        
	        platillo.setPlain(ingredientes);
	        return ResponseEntity.ok(platillo);
	}

	
	
	@GetMapping(path="/buscar/{idplatillo}")
	public Platillo buscarPlstilloPorId(@PathVariable Integer idplatillo){
		
		Optional<Platillo> platillo = ur.findById(idplatillo);
		
		return platillo.isPresent() ? platillo.get() : null;
	}
	
	
	@GetMapping(path="/buscar/{precioMin}/{precioMax}")
    public List<Platillo> buscarPlatilloPorPrecio(@PathVariable Double precioMin, @PathVariable Double precioMax) {
        List<Platillo> platillos = ur.findByPrecioVentaBetween(precioMin, precioMax);
        return platillos; 
    }
	
	
	@DeleteMapping(path="/borrar/{idplatillo}")
	public void borrarPedido(@PathVariable int idplatillo) {
		ur.deleteById(idplatillo);
		
	}
	
}
