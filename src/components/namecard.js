import React from 'react'
import styled, { css } from 'styled-components'

const Base = styled.div` .card-wrap{
  @include media_query($mobile-breakpoint){
    flex-wrap: wrap;
  }
  @extend %card;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  // Profile image diamond
  .image-wrap{
    @include media_query($mobile-breakpoint){
      animation: none;
      left: 0;
      margin-right: 0;
      margin-bottom: 10px;
    }
    animation: portraitSlideLeft 0.8s 0.2s;
    animation-fill-mode: both;
    padding: 20px;
    margin-right: 40px;
    position: relative;
    left: 15px;

    .mask{
      @include media_query($mobile-breakpoint){
        transform: scale(0.8) rotate(45deg);
      }
      transform : rotate(45deg);
      width: 150px;
      height: 150px;
      overflow: hidden;
    }

    .profile-image{
      transform: rotate(-45deg);
      @extend %bg-image;
      background-size: 113%;
      width: 290px;
      height: 260px;
      transform-origin: 43px 200px;; // Better centering of profile image
    }
  }

  // Text
  .content{
    @include media_query($mobile-breakpoint){
      animation: none;
    }
    animation: bioSlideRight 0.8s 0.2s;
    animation-fill-mode: both;
    max-width: 440px;
    position: relative;

    // David James
    h2{
      @include media_query($mobile-breakpoint){
        font-size: 2.2rem;
      }
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    // Front End Developer
    h3{
      color: $primary-accent;
    }

    p:last-of-type{
      margin-bottom: 0;
    }
  }

  .Socials{
    margin-top: 15px;

    .social-icons{
      @extend %social-icons;
    }
  }
}
`

class Name extends React.Component {
  render() {
    return (
      <Base {...this.props} href='/'>
        Praveen Chandar
      </Base>
    );
  }
}

export default Name
