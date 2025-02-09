import { fetchPremierLeagueData } from '../src/football/api'

describe("fetchPremierLeagueData", () => {
    it("should return a response with status 200", async () => {
        const result = await fetchPremierLeagueData();
        expect(result).toBeDefined();

        if (result !== "error") {
            // result の型が resultData の場合にのみ、status をチェック
            expect(result.status).toBe(200);
            expect(result.data).toBeDefined();
        } else {
            fail("API request failed");
        }
    });
  });