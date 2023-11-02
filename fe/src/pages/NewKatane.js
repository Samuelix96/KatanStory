import { motion } from 'framer-motion'
import React from 'react'
import MainLayout from '../layout/MainLayout'
import { useGetKataneQuery } from '../api/apiSlice'
import SingleNewKatana from '../components/katane/SingleNewKatana'
import { nanoid } from 'nanoid'
import { Col, Container, Row } from 'react-bootstrap';

const NewKatane = () =>
{

  const {
    data: newKata,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,

  } = useGetKataneQuery("new")

  console.log("SOno le new ", newKata)

  return (
    <MainLayout>
      <motion.div
        initial={ { width: 0 } }
        animate={ { width: "100%" } }
        exit={ { width: window.innerWidth, translate: { duration: 0.1 } } }>


      
          <h1 className='text-center fs-3 my-2 '>New Katane</h1>
          <Container fluid className='my-5'>
            <Row>
              <Col className='d-flex justify-content-between align-items-center gap-3 flex-wrap'>
              { isPostSuccess && !isPostLoading ? (
            newKata ? (
              newKata?.katas?.map((item) =>
              {

                return (
                  <SingleNewKatana
                  key={item._id}
                    img={ item.img }
                    title={ item.title }
                    price= { item.price}
                    category={ item.category }
                    id={ item._id }
                   

                  />
                );
              })
            ) : (
              <p>...Loading</p>
            )
          ) : IsPostError ? (
            <p>Error into call by category</p>
          ) : null }
              </Col>
            </Row>
          </Container>
          
        
      </motion.div>
    </MainLayout>

  )
}

export default NewKatane
