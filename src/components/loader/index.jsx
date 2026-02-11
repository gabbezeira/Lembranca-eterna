import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  40% {
    transform: translateY(-60%);
    opacity: 1;
  }
  60% {
    transform: translateY(-30%);
    opacity: 0.8;
  }
`

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const Dot = styled.div`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  animation: ${bounce} ${({ $speed }) => $speed}ms infinite ease-in-out;
  animation-delay: ${({ $delay }) => $delay}ms;
`

export const Loader = ({ size = 16, color = '#1dc1f7', speed = 1400 }) => {
	return (
		<LoaderContainer>
			{[0, 1, 2].map((index) => (
				<Dot
					key={index}
					$size={size}
					$color={color}
					$speed={speed}
					$delay={index * 150}
				/>
			))}
		</LoaderContainer>
	)
}
