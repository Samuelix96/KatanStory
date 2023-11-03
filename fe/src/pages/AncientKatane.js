import React from 'react'
import MainLayout from '../layout/MainLayout'
import { motion } from "framer-motion";
import SingleAncientKatana from '../components/katane/SingleAncientKatana';
import { useGetKataneQuery } from '../api/apiSlice';
import { Col, Container, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';
const AncientKatane = () =>
{

  const {
    data: ancientKata,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
    
  } = useGetKataneQuery("ancient")

  return (
    <MainLayout>
      <motion.div
        initial={ { width: 0 } }
        animate={ { width: "100%" } }
        exit={ { width: 0 } }
      >
             <div className="  bg-body-primary p-4 rounded-4 m-3 ">
          <h1 className='text-center'>Ancient Katane</h1>
          </div>
         

          <Container fluid>
            <Row>
              <Col className='d-flex gap-3 justify-content-between flex-wrap'>
              { isPostSuccess && !isPostLoading ? (
        ancientKata ? (
          ancientKata?.katas?.map((item) =>
          {
            
            return (
              <SingleAncientKatana
              key= {item._id}
                title= {item.title}
                price= { item.price}
                category = { item.category}
                img={ item.img }
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
export default AncientKatane
