module.exports = {
    login: {
        cuit: '#F1\\:username',
        clave: '#F1\\:password',
        siguiente: '#F1\\:btnSiguiente',
        ingresar: '#F1\\:btnIngresar',
    },
    navegacion: {
        rcel: 'div[title="rcel"]',
        representada: 'input[value="<nombre-contribuyente>"]',
        salir: 'a[title="Salir"]',
    },
    rcel: {
        generar_comprobante: 'a#btn_gen_cmp',
        punto_venta: 'select[name="puntoDeVenta"]',
        tipo_comprobante: 'select[name="universoComprobante"]',
        continuar: 'input[value="Continuar >"]',
        fecha_comprobante: '#fc',
        periodo_desde: '#fsd',
        periodo_hasta: '#fsh',
        vencimiento_pago: '#vencimientopago',
        condicion_contribuyente: '#idivareceptor',
        pago_contado: '#formadepago1',
        pago_debito: '#formadepago2',
        pago_credito: '#formadepago3',
        pago_ctacte: '#formadepago4',
        pago_cheque: '#formadepago5',
        pago_ticket: '#formadepago6',
        pago_otra: '#formadepago7',
        concepto: '#idconcepto',
        destino: '#destino',
        tipo_receptor: '#nrodocreceptor',
        id_receptor: '#nrodocextranjeroreceptor',
        razon_social: '#razonsocialreceptor',
        domicilio: '#domicilioreceptor',
        forma_pago: '#descripcionformadepago',
        descripcion: '#detalle_descripcion1',
        medida: '#detalle_medida1',
        monto: '#detalle_precio1',
        confirmar: '#btngenerar',
        menu_principal: 'input[value="Menú Principal"]',
        salir: '#encabezado_salir a',
        comprobante_generado: 'img[alt="ok"]',
    }
};