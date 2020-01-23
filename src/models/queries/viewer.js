import gql from "graphql-tag";

const GET_VIEWER_INFO = gql`
    {
        viewer {
            name,
            isViewer,
            login,
            avatarUrl,
            url,
            bio,
            email,
            company,
            repositories (first: 100) {
                edges {
                    node {
                        id,
                        name,
                        url,
                        isPrivate,
                        description,
                        pushedAt,
                        createdAt,
                        stargazers {
                            totalCount
                        },
                        forkCount,
                        languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
                            edges {
                                node {
                                    name
                                }
                            }
                        }  
                    }
                }
            }
        }
    }
`;

export default GET_VIEWER_INFO;

