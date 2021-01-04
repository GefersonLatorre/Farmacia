using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Producto
    {
        [Key]
        public int Codigo { get; set; }
        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Nombre { get; set; }
        [Required]
        [Column(TypeName = "bigint")]
        public long Precio { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Cantidad { get; set; }
        [Required]
        [Column(TypeName = "varchar(250)")]
        public string Descripcion { get; set; }
    }
}
