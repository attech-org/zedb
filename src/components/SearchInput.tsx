import styled from "styled-components";

const Input = styled.input`
  background: #dfdbdb;
  border-radius: 5px;
  padding: 5px 0px;
  width: 90%;
  border: none;
  outline: none;
`;

const Div = styled.div`
  width: 95%;
  background-color: #dfdbdb;
  border-radius: 5px;
  margin: 7px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const SearchInput = () => {
  return (
    <Div>
      <Span>
        <svg
          aria-label="Search"
          color="#8e8e8e"
          fill="#8e8e8e"
          height="16"
          role="img"
          viewBox="0 0 24 24"
          width="16"
        >
          <path
            d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="16.511"
            x2="22"
            y1="16.511"
            y2="22"
          ></line>
        </svg>
      </Span>

      <Input placeholder="Search" />
    </Div>
  );
};
