import mongoose from 'mongoose';
const { Schema } = mongoose;

const optionSchema = new Schema({
  id: String,
  option: String,
  isCorrect: Boolean,
});

const questionSchema = new Schema({
  id: String,
  question: String,
  options: [optionSchema],
});

const quizSchema = new Schema({
  id: String,
  category: String,
  image: String,
  title: String,
  description: String,
  quiz: [questionSchema],
});

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;
