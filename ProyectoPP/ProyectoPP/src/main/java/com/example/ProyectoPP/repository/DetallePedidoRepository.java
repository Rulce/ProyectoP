package com.example.ProyectoPP.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoPP.entity.DetallePedido;

@Repository("detallePedidoRepository")

public interface DetallePedidoRepository extends JpaRepository<DetallePedido, Integer>{

}
