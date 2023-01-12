import { gql } from "@apollo/client";

// get routine data
export const EXE_ROUTINE = gql`
  query MyQuery2($search: String!) {
    exercise_routine(where: { exercise_routine_name: { _ilike: $search } }) {
      created_at
      day_1
      day_2
      day_3
      day_4
      day_5
      day_6
      day_7
      exercise_routine_name
      id
      updated_at
    }
  }
`;

// Remove routine data
export const DELETE_EXE_ROUTINE = gql`
  mutation MyMutation($id: uuid!) {
    delete_exercise_routine_by_pk(id: $id) {
      id
    }
  }
`;

// Create Routine
export const CREATE_EXE_ROUTINE = gql`
  mutation MyMutation(
    $exercise_routine_name: String!
    $day_1: String!
    $day_2: String!
    $day_3: String!
    $day_4: String!
    $day_5: String!
    $day_6: String!
    $day_7: String!
  ) {
    insert_exercise_routine_one(
      object: {
        day_1: $day_1
        day_2: $day_2
        day_3: $day_3
        day_4: $day_4
        day_5: $day_5
        day_6: $day_6
        day_7: $day_7
        exercise_routine_name: $exercise_routine_name
      }
    ) {
      created_at
      day_1
      day_2
      day_3
      day_4
      day_5
      day_6
      day_7
      exercise_routine_name
      id
      updated_at
    }
  }
`;

export const UPDATE_EXE_ROUTINE = gql`
  mutation UPDATE_EXERCIE_ROUTIEN_BY_PK(
    $id: uuid!
    $day_1: String!
    $day_2: String!
    $day_3: String!
    $day_4: String!
    $day_5: String!
    $day_6: String!
    $day_7: String!
    $exercise_routine_name: String!
  ) {
    update_exercise_routine_by_pk(
      pk_columns: { id: $id }
      _set: {
        day_1: $day_1
        day_2: $day_2
        day_3: $day_3
        day_4: $day_4
        day_5: $day_5
        day_6: $day_6
        day_7: $day_7
        exercise_routine_name: $exercise_routine_name
      }
    ) {
      exercise_routine_name
      day_7
      day_6
      day_5
      day_4
      day_3
      day_2
      day_1
    }
  }
`;
