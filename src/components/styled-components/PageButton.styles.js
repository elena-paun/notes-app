import styled from 'styled-components';
import { Pagination } from '@material-ui/lab';

export const PaginationButtons = styled.div`
    font-family: Sofia;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    right: 0;
`;
export const PageButton = styled.button`
    cursor: pointer;
    border-radius: 100%;
    border: none;
    background-color: transparent;
    &:active {
      outline: none;
      background-color: red;
    }
`;
export const ButtonContainer = styled.div`
   
`

export const PaginationContainer = styled(Pagination)`
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
`