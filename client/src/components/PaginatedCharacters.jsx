import React, { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";

const FetchedPosts = ({ index }) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const address = `https://rickandmortyapi.com/api/character/?page=${index}`;

  const { data, error, isLoading } = useSWR(address, fetcher);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <div>Loading failed...</div>;

  return (
    <>
      <Container>
        {data?.results.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" width={150} height={150} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </Container>
    </>
  );
};

/***********************************************************/

const Characters = () => {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <>
      <FetchedPosts index={pageIndex} />
      <Wrapper>
        {/* 
         Preload the next items or pages and render them inside a hidden `div`,
         when the user clicks the “Previous/Next” buttons or navigates to a next page, 
         the data is already there
        */}
        <div style={{ display: "none" }}>
          <FetchedPosts index={pageIndex + 1} />
        </div>

        <Button onClick={() => setPageIndex(pageIndex - 1)}>Previous</Button>
        <Button onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>
      </Wrapper>
    </>
  );
};

export default Characters;

const Container = styled.div`
  padding-block: 50px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
`;

const Wrapper = styled.div`
  margin: 5px auto;
`;

const Button = styled.button`
  width: 120px;
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
