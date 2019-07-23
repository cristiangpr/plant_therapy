import React, { Fragment, Component } from 'react'
import { buildUrl } from 'react-instafeed'
import useAbortableFetch from 'use-abortable-fetch';




const options = {
accessToken: '92bedffba0f8495c8220ddb88c6b5ccb1913298339.92bedff.14e523580fd54980a28e7d719706ca0c',
  get: 'user',
  clientId: 	'92bedffba0f8495c8220ddb88c6b5ccb',


  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 1425110473,
}
const Instagram = () => {
  const { json, loading, error, abort } = useAbortableFetch(buildUrl(options))
  if (loading) return 'Loading...'
  if (error) return `Error: ${error}`
  if (!json) return null

  const { data, meta, pagination } = json

  return (
    <Fragment>
      {// eslint-disable-next-line no-unused-vars
      data &&
        data.map(({ caption, id, images, tags }, index) => {
          const image = images[options.resolution]
          return (
              <img
                key={index}
                url={image.url}
                title={caption.text}
                caption={caption.text}
                width={image.width}
                height={image.height}
              />

          )
        })}
    </Fragment>
  )
}
export default Instagram;
