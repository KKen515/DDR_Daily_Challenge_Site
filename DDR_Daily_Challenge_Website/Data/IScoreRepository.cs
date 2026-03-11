using DDR_Daily_Challenge_Website.Models;

namespace DDR_Daily_Challenge_Website.Data;

public interface IScoreRepository
{
    public IEnumerable<Score> GetAllScores();
    public Score GetScoreById(int id);
    void UpdateScore(Score score);

}