/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//ocultar mensajes para el campo nombre
$("#nombreOK").hide();
$("#nombreError").hide();
//ocultar mensajes para el campo telefono
$("#telOK").hide();
$("#telError").hide();
//ocultar mensajes para el campo email
$("#mailOK").hide();
$("#mailError").hide();
//ocultar mensajes para el campo password
$("#passOK").hide();
$("#passError").hide();

function validar(_campo) {
    var _campoOK = false;

    if (_campo !== "")
    {
        _campoOK = true;
    }
    return _campoOK;
}

$('#btnEnviar').click(function () {
    var nombre = "";
    var tel = "";
    var mail = "";
    var pass = "";


    nombre = $('#nombre').val();
    tel = parseInt($('#telefono').val());
    mail = $('#mail').val();
    pass = $('#pass').val();

    if (validar(nombre) === false)
    {
        //error nombre
        $("#frmNombre").attr("class", "form-group has-error has-feedback");
        $("#nombreOK").hide();
        $("#nombreError").show();
    } else {
        //okay nombre
        $("#frmNombre").attr("class", "form-group has-success has-feedback");
        $("#nombreError").hide();
        $("#nombreOK").show();
    }
    if (validar(tel) === false)
    {
        //error telefono
        $("#frmTelefono").attr("class", "form-group has-error has-feedback");
        $("#telOK").hide();
        $("#telError").show();
    } else if (isNaN(tel)) {
        //error telefono
        $("#frmTelefono").attr("class", "form-group has-error has-feedback");
        $("#telOK").hide();
        $("#telError").show();
    } else {
        //okay telefono
        $("#frmTelefono").attr("class", "form-group has-success has-feedback");
        $("#telError").hide();
        $("#telOK").show();
    }
    if (validar(mail) === false)
    {
        //error mail
        $("#frmMail").attr("class", "form-group has-error has-feedback");
        $("#mailOK").hie();
        $("#mailError").show();
    } else {
        //okay mail
        $("#frmMail").attr("class", "form-group has-success has-feedback");
        $("#mailError").hide();
        $("#mailOK").show();
    }
    if (validar(pass) === false)
    {
        //error password
        $('#frmPass').popover('show');
    } else if (pass.length < 8) {
        //error password
        $('#frmPass').popover('show');
    } else {
        //okay password

    }
    if (validar(pass) === false)
    {
        //error password
        $("#frmPass").attr("class", "form-group has-error has-feedback");
        $("#passOK").hide();
        $("#passError").show();
    } else if (pass.length < 8) {
        //error password
        $("#frmPass").attr("class", "form-group has-error has-feedback");
        $("#passOK").hide();
        $("#passError").show();
    } else {
        //okay password
        $("#frmPass").attr("class", "form-group has-success has-feedback");
        $("#passError").hide();
        $("#passOK").show();
    }
    if ($("input[type='checkbox']").is(":checked"))
    {
        // no muesta el pop-up
    } else {
        //error preferencias
        $('[data-toggle="popover"]').popover('show');
    }












});