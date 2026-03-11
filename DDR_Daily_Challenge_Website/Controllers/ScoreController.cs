using DDR_Daily_Challenge_Website.Data;
using DDR_Daily_Challenge_Website.Models;
using Microsoft.AspNetCore.Mvc;

namespace DDR_Daily_Challenge_Website.Controllers;

public class ScoreController : Controller
{
    private readonly IScoreRepository _repository;

    public ScoreController(IScoreRepository repository)
    {
        _repository = repository;
    }
    // GET
    public IActionResult Index()
    {
        var scores = _repository.GetAllScores();
        return View(scores);
    }

    public IActionResult ViewScore(int id)
    {
        var score = _repository.GetScoreById(id);
        return View(score);
    }
    
    public IActionResult UpdateScore(int id)
    {
        Score song = _repository.GetScoreById(id);
        if (song == null)
        {
            return View("ScoreNotFound");
        }
        return View(song);
    }
    
    public IActionResult UpdateScoreToDatabase(Score score)
    {
        _repository.UpdateScore(score);

        return RedirectToAction("ViewScore", new { id = score.ScoresID });
    }
    
}