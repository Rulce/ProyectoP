package com.example.ProyectoPP.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoPP.entity.DetallePedido;
import com.example.ProyectoPP.repository.DetallePedidoRepository;


	@RestController
	@RequestMapping("/detallePedido")
	@CrossOrigin

	public class DetallePedidoService {

		@Autowired
		DetallePedidoRepository ur;
		
		@GetMapping(path = "/buscar")
		public List<DetallePedido> buscarDetallePedido(){
			return ur.findAll();
		}
}

