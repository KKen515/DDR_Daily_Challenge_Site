using System.Data;
using DDR_Daily_Challenge_Website.Models;
using Dapper;

namespace DDR_Daily_Challenge_Website.Data;

public class ScoreRepository : IScoreRepository
{
    private readonly IDbConnection _Connection;

    public ScoreRepository(IDbConnection connection)
    {
        _Connection = connection;
    }
    
    public IEnumerable<Score> GetAllScores()
    {
        return _Connection.Query<Score>("SELECT * FROM scores");
    }

    public Score GetScoreById(int id)
    {
        return _Connection.QuerySingle<Score>("SELECT * FROM scores WHERE ScoresID = @id;", new { id });
    }

    public void UpdateScore(Score score)
    {
        _Connection.Execute("UPDATE scores SET PlayerName = @name, PlayerScore = @score, Letter = @letter WHERE ScoresID = @id",
            new {name = score.PlayerName, score = score.PlayerScore, letter = score.Letter, id = score.ScoresID });
    }
}