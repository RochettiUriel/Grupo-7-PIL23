﻿namespace Backend.Models
{
    public class UsuarioModel
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public int Dni { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        //Relacion uno-uno
        public CuentaModel Cuenta { get; set; }

    }
}
