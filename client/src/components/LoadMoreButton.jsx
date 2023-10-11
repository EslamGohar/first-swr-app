import useSWRInfinite from "swr/infinite";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 10;

const LoadMoreData = () => {
  const getKey = (pageIndex) =>
    `https://rickandmortyapi.com/api/character?page=${pageIndex + 1}`;

  const { data, isLoading, error, size, setSize } = useSWRInfinite(
    getKey,
    fetcher
  );

  const allData = data
    ? [].concat(...data.map((page) => page.results.slice(0, 4)))
    : [];

  // const allData = data ? data.flatMap((page) => page.results.slice(0, 4)) : [];

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  const isEmpty = data?.[0]?.length === 0;

  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  if (error) return <p>Loading failed...</p>;

  const loadMore = () => {
    if (!isReachingEnd) {
      setSize(size + 1);
    }
  };

  return (
    <>
      <Container>
        {allData.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" width={150} height={150} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </Container>

      <Button disabled={isLoadingMore || isReachingEnd} onClick={loadMore}>
        {isLoadingMore
          ? "loading..."
          : isReachingEnd
          ? "No more data"
          : "See More Characters"}
      </Button>
      <Wrapper>
        <div>{isEmpty ? <p>No more data found.</p> : null}</div>
      </Wrapper>
    </>
  );
};

export default LoadMoreData;

const Container = styled.div`
  padding-block: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Wrapper = styled.div`
  margin: 0px auto;
  text-align: center;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  margin: 50px 20px;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: #6c6ce3;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;
