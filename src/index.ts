import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { fetchPremierLeagueData } from './football/api';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const result = await fetchPremierLeagueData();
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: result,
        }),
    };
};