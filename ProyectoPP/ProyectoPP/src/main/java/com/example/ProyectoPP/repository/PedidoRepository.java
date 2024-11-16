package com.example.ProyectoPP.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoPP.entity.Pedido;

@Repository("pedidoRepository")

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {

}
