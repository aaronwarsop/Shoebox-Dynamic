using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ShoeboxDynamic.Models;

namespace ShoeboxDynamic.Pages
{
    public class FormModel : PageModel
    {
        public FormModel(AppDataContext db)
        {
            _db = db;
        }
        public readonly AppDataContext _db;
        public Products Products { get; set; }
        
        public void OnGet()
        {

        }

        public IActionResult OnPost() {
            _db.Products.Add(Products);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
