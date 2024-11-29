export async function getSubscriptionStatus(graph) {
  const request = await graph(
    `
    #graphql
    query Shop{
      app{
         installation {
             launchUrl
             activeSubscriptions{
                id
                name
                createdAt
                returnUrl
                status
                currentPeriodEnd
                trialDays
                test
              }
            }
         }
    }
    `,
    { variables: {} }
  );

  const response = await request.json();
  return response;
}
