import styled from "styled-components";

export const DashboardStyled = styled.div`
  .Polaris-IndexTable__TableRow {
    .hidden-actions-cell {
      visibility: hidden;
    }
    &:hover {
      .hidden-actions-cell {
        visibility: visible;
      }
    }
  }
`;
