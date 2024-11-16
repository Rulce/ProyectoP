package com.example.ProyectoPP.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.ProyectoPP.entity.DetallePedido;
import com.example.ProyectoPP.entity.Pedido;
import com.example.ProyectoPP.repository.DetallePedidoRepository;
import com.example.ProyectoPP.repository.PedidoRepository;

@RestController
@RequestMapping("/pedido")
@CrossOrigin

public class PedidoService {

	@Autowired
	PedidoRepository ur;
	
	@Autowired
	DetallePedidoRepository pr;
	
	@GetMapping(path = "/buscar")
	public List<Pedido> buscarPedido(){
		return ur.findAll();
	}
	
	@PostMapping(path="/guardar")
	public Pedido guardarPedido(@RequestBody Pedido pedido) {
		
		List<DetallePedido> detalle = pedido.getDetallePedido();
		
		pedido.setDetallePedido(null);
		
		pedido = ur.save(pedido);
		
		
		for(DetallePedido c : detalle) {
			c.setPedidoIdpedido(pedido.getIdpedido());
			pr.save(c);
		}
		
		pedido.setDetallePedido(detalle);
		return pedido;
	}
	
	@GetMapping(path="/buscar/{idpedido}")
	public Pedido buscarPedidoPorId(@PathVariable Integer idpedido){
		
		Optional<Pedido> pedido = ur.findById(idpedido);
		
		return pedido.isPresent() ? pedido.get() : null;
	}
	
	@DeleteMapping(path="/borrar/{idpedido}")
	public void borrarPedido(@PathVariable int idpedido) {
		ur.deleteById(idpedido);
		
	}
	
}
