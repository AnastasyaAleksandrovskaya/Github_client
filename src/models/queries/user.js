import gql from "graphql-tag";

const GET_USER_INFO = gql`
    query user($login: String!)
    {
        user(login: $login) {
            id,
            name,
            login,
            avatarUrl,
            url,
            bio,
            company,
            location,
            email,
            isViewer,
            viewerIsFollowing,
            repositories( first: 6) {
                edges{
                    node{
                        id
                        name
                        url
                         owner {
                          id
                          login
                          avatarUrl
                         }
                         stargazers {
                          totalCount
                         }
                         viewerHasStarred
                         watchers {
                          totalCount
                         }
                    }
                }
            }
        }
    }
`;

export default GET_USER_INFO;

