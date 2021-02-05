import React from 'react';
import { PageButton, ButtonContainer, PaginationButtons } from './styled-components/PageButton.styles';

export const Pagination = ({ notesPerPage, totalPosts, paginate, isSelected , setIsSelected }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / notesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <PaginationButtons>
          {pageNumbers.map(number => (
            <ButtonContainer key={number}>
                <PageButton  isSelected={isSelected} key={number} onClick={() => {setIsSelected(!isSelected); paginate(number)}}>{number}</PageButton>
            </ButtonContainer>
          ))}
        </PaginationButtons>
    )
}