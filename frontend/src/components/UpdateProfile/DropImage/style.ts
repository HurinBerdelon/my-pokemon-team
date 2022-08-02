import styled from "styled-components";

export const DropImageContainer = styled.div`

    margin-top: 2rem;
    margin-bottom: .5rem;

    .previewZone {
        width: 200px;
        height: 200px;
        position: relative;
        
        .preview {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        .removeButton {
            position: absolute;
            bottom: 0;
            right: 0;

            font-size: 2rem;
            color: ${props => props.theme.colors.danger};
        }
    }

    .dragZone {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        border: 2px dashed ${props => props.theme.colors.buttons};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        gap: 1rem;

        &:focus {
            p {
                
                color: ${props => props.theme.colors.danger};
            }
        }

        &.dragZoneError, &.isDragActive {
            color: ${props => props.theme.colors.danger};
            border: 2px dashed ${props => props.theme.colors.danger};
        }

        p {
            width: 50%;
            font-size: 1.35rem;
            text-align: center;
            color: ${props => props.theme.colors.textOne};
        }

        .undoButton {
            position: absolute;
            bottom: 0;
            right: 0;

            font-size: 2rem;
            color: ${props => props.theme.colors.danger};
        }
        
        .errorMessage {
            width: 50%;
            text-align: center;
            color: ${props => props.theme.colors.danger};
        }
    }
`