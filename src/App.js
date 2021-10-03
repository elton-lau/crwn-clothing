import React from 'react'
import './App.css'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selectors'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from './redux/shop/shop.selectors'

class App extends React.Component {
  // constructor () {
  //   super()

  //   this.state = {
  //     currentUser: null
  //   }
  // }
  unsubscribeFromAuth = null

  componentDidMount () {
    const { setCurrentUser, collectionsArray } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data()
            },
            () => {
              console.log(this.state)
            }
          )
        })
      }
      setCurrentUser(userAuth)
      addCollectionAndDocuments('collections', collectionsArray.map(
        ({items, title}) => ({title, items})
      ))
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route
          path='/signin'
          render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
