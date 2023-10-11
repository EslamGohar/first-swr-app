import useSWR, { preload } from "swr";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((res) => res.json());

// It will prefetch the data when the HTML loads, even before JavaScript download (rendering the component)
// and store the results in the cache.
// should call before rendering.
preload("http://localhost:3001", fetcher);

const PrefetchUsers = () => {
  const { data, error } = useSWR("http://localhost:3001", fetcher);

  if (error) return <div>Failed to preload data.</div>;

  return (
    <Container>
      {data?.map((user, index) => {
        return (
          <div key={index}>
            <h3>{user.name}</h3>
            <img src={user.avatar} alt="" width={120} height={120} />
          </div>
        );
      })}
    </Container>
  );
};

export default PrefetchUsers;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: wrap row;
`;
