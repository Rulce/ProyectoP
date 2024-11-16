package com.example.ProyectoPP.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "pedido")

public class Pedido implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -572583808552563400L;

	@Id
	@Column(name = "idpedido")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private Integer idpedido;

	@Column(name = "fecha_hora")
	private LocalDateTime fechaHora;
	
	@PrePersist
	protected void onCreate() {
	    this.fechaHora = LocalDateTime.now();
	}
	
	@Column(name = "precio_total")
	private Double precioTotal;
	
	@Column(name="estado_pedido_idestado_pedido")
    private Integer estadoPedidoIdestadoPedido;

    public Integer getEstadoPedidoIdestadoPedido() {
		return estadoPedidoIdestadoPedido;
	}

	public void setEstadoPedidoIdestadoPedido(Integer estadoPedidoIdestadoPedido) {
		this.estadoPedidoIdestadoPedido = estadoPedidoIdestadoPedido;
	}

	public Integer getUsuarioIdusuario() {
		return usuarioIdusuario;
	}

	public void setUsuarioIdusuario(Integer usuarioIdusuario) {
		this.usuarioIdusuario = usuarioIdusuario;
	}

	@Column(name="usuario_idusuario")
    private Integer usuarioIdusuario;
	
	@OneToMany(cascade = CascadeType.ALL,
			fetch = FetchType.LAZY,
			mappedBy = "pedidoIdpedido")
	private List<DetallePedido> DetallePedido;

	public Integer getIdpedido() {
		return idpedido;
	}

	public void setIdpedido(Integer idpedido) {
		this.idpedido = idpedido;
	}

	public LocalDateTime getFechaHora() {
		return fechaHora;
	}

	public void setFechaHora(LocalDateTime fechaHora) {
		this.fechaHora = fechaHora;
	}

	public Double getPrecioTotal() {
		return precioTotal;
	}

	public void setPrecioTotal(Double precioTotal) {
		this.precioTotal = precioTotal;
	}

	public List<DetallePedido> getDetallePedido() {
		return DetallePedido;
	}

	public void setDetallePedido(List<DetallePedido> detallePedido) {
		DetallePedido = detallePedido;
	}
}
