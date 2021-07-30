import { useEffect, useState } from 'react'
import { NumberParam, useQueryParam } from 'use-query-params'
import { ITEMS_PER_PAGE } from '../constants'


export const usePagination = <TItem extends {}>(list: Array<TItem>): {
  next: () => void; pagesCount: number; prev: () => void; hasNext: boolean; items: TItem[]; setPage: (page: number) => void
} => {
  const [page, setPage] = useQueryParam('page', NumberParam)

  useEffect(() => setPage(1), [list])

  const items = list.slice((page - 1) * ITEMS_PER_PAGE, (page * ITEMS_PER_PAGE))
  const next = () => setPage(page + 1)
  const prev = () => setPage(page - 1)
  const hasNext = list.length > page * ITEMS_PER_PAGE
  const pagesCount = Math.floor(list.length / ITEMS_PER_PAGE)

  return {
    hasNext,
    next,
    prev,
    items,
    pagesCount,
    setPage,
  }
}