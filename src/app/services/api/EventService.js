import BaseService from "../BaseService";

const ENDPOINTS = {
  QUESTIONS: "api/admin/questions",
  ATTACHMENT: "api/admin/attachment"
};

class EventService extends BaseService {
  fetchQuestions = async page => {
    return this.api.get(ENDPOINTS.QUESTIONS + '?page=' + page + '&perPage=20');
  };

  deleteQuestion = questionId => {
    return this.api.delete(ENDPOINTS.QUESTIONS + "/" + questionId);
  };
  addQuestion = question => {
    let type = "image";
    let formData = new FormData();
    if (question.attachment)
      formData.append(
        "attachment",
        question.attachment,
        question.attachment.name,
        type
      );
    formData.append("question", question.question);
    formData.append("answers[0][answer]", question.answers[0].answer);
    formData.append("answers[0][correct]", question.answers[0].correct);
    formData.append("answers[1][answer]", question.answers[1].answer);
    formData.append("answers[1][correct]", question.answers[1].correct);
    formData.append("answers[2][answer]", question.answers[2].answer);
    formData.append("answers[2][correct]", question.answers[2].correct);
    formData.append("answers[3][answer]", question.answers[3].answer);
    formData.append("answers[3][correct]", question.answers[3].correct);
    formData.append("genre_id", question.genre_id);
    return this.api.post(ENDPOINTS.QUESTIONS, formData);
  };

  editQuestion = question => {
    let type = "image";
    let formData = new FormData();
    if (question.attachment) {
      formData.append(
        "attachment",
        question.attachment,
        question.attachment.name,
        type
      );
    }

    formData.append("question", question.question);
    formData.append("answers[0][answer]", question.answers[0].answer);
    formData.append("answers[0][correct]", question.answers[0].correct);
    formData.append("answers[1][answer]", question.answers[1].answer);
    formData.append("answers[1][correct]", question.answers[1].correct);
    formData.append("answers[2][answer]", question.answers[2].answer);
    formData.append("answers[2][correct]", question.answers[2].correct);
    formData.append("answers[3][answer]", question.answers[3].answer);
    formData.append("answers[3][correct]", question.answers[3].correct);
    formData.append("genre_id", question.genre_id);
    formData.append("is_old_picture", question.is_old_picture);
    formData.set("_method", "PUT");
    return this.api.post(ENDPOINTS.QUESTIONS + "/" + question.id, formData);
  };
}

const questionService = new EventService();
export default questionService;
