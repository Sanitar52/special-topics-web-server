import type {
  QueryResolvers,
  MutationResolvers,
  UserBankRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userBanks: QueryResolvers['userBanks'] = () => {
  return db.userBank.findMany()
}

export const userBank: QueryResolvers['userBank'] = ({ id }) => {
  return db.userBank.findUnique({
    where: { id },
  })
}

export const createUserBank: MutationResolvers['createUserBank'] = ({
  input,
}) => {
  return db.userBank.create({
    data: input,
  })
}

export const updateUserBank: MutationResolvers['updateUserBank'] = ({
  id,
  input,
}) => {
  return db.userBank.update({
    data: input,
    where: { id },
  })
}

export const userBanksByUserId: QueryResolvers['userBanksByUserId'] = ({
  userId,
}) => {
  return db.userBank.findMany({
    where: { userId },
  })
}

export const deleteUserBank: MutationResolvers['deleteUserBank'] = ({ id }) => {
  return db.userBank.delete({
    where: { id },
  })
}

export const UserBank: UserBankRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userBank.findUnique({ where: { id: root?.id } }).user()
  },
}