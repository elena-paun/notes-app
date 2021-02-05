import { Skeleton } from '@material-ui/lab';
import styled from 'styled-components';

export const SkeletonBox = styled.div`
    display: grid;
    grid-template-columns: 180px 180px;
    grid-gap: 20px;
    width: 380px;
    height: 400px;
    padding: 0 0 0 20px;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 180px;
    }
`
export const SkeletonNote = styled(Skeleton)`
    border-radius: 20px;
`