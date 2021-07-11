using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Dropdownlist.Models
{
    public class Address
    {
        [Display(Name = "Tinh thanh")]
        public int ProvinceID { set; get; }

        [Display(Name = "Quan Huyen")]
        public int DistrictID { set; get; }
    }
}