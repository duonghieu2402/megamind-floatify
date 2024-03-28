import styled from "styled-components";

export const GroupButtonStyled = styled.div`
  .group-direction-and-placement {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .group-placement {
      width: 56px;
      height: 36px;
      background-color: var(--p-color-bg-fill-secondary);
      border-radius: var(--p-border-radius-100);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      + .active {
        background-color: #333;
        color: var(--p-color-bg-fill-secondary-active);
      }
    }
  }

  .slider-and-color-group {
    display: flex;
    align-items: end;
    gap: 12px;
    .slider-container {
      flex: 1;
    }
  }

  .button-group-style-container {
    display: flex;
    border: 1px solid var(--p-color-border);
    width: fit-content;
    margin: 12px 0;
    .button-group-style {
      background-color: var(--p-color-bg-fill-secondary);
      height: 36px;
      width: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:last-child) {
        border-right: 1px solid var(--p-color-border);
      }
    }
  }

  .button-list {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 2px;
    border-radius: 4px;
    position: relative;
    &:hover {
      background-color: var(--p-color-bg-fill-secondary);

      .button-move {
        visibility: visible;
      }

      .button-actions {
        display: block;
      }
    }

    .button-move {
      visibility: hidden;
      cursor: move;
    }

    .button-actions {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }
  }
`;
